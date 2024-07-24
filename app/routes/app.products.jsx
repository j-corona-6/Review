import { Button, Card, Layout, Page, ResourceItem, ResourceList, Text, Thumbnail } from "@shopify/polaris"

import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProductIcon } from "@shopify/polaris-icons"
import { url } from "inspector";

export const loader = async ({ request }) => {
    const { admin } = await authenticate.admin(request);
    const response = admin.graphql(`
        #graphql
        query fetchProducts {
            products(first: 5) {
                edges {
                    node {
                        id
                        title
                        handle
                        featuredImage {
                            url
                            altText
                        }
                    }
                }
            }
        }`)
    const productsData = (await (await response).json()).data
    return json({
        products: productsData.products.edges
    });
}

const Products = () => {
    const { products } = useLoaderData()
    const renderMedia = (image) => {
        return image ? <Thumbnail source={image.url} alt={image.altText} />
            : <Thumbnail source={ProductIcon} alt="Product" />
    }
    const renderItem = (item) => {
        const { id, title, handle, featuredImage } = item.node
        return (
            <ResourceItem
                id={id}
                url={url}
                media={renderMedia(featuredImage)}
                onClick={() => {
                    shopify.toast.show(`Producto: ${title}`)
                }}
            >
                <Text as="h4" variant="bodyMd">
                    {title}
                </Text>
                <div>
                    {handle}
                </div>
            </ResourceItem>
        )
    }
    return (
        <Page>
            <ui-title-bar title="Products">
                <button
                    variant="primary"
                    onClick={() => {
                        shopify.toast.show("Products")
                    }}>
                    Products
                </button>
            </ui-title-bar>
            <Layout>
                <Layout.Section>
                    <Card>
                        <Text as="h5" variant="bodyMd">
                            Products
                        </Text>
                        <Button
                            variant="primary"
                            onClick={() => {
                                shopify.toast.show("Producto generado")
                            }}
                        >
                            Generar producto
                        </Button>
                        <ResourceList
                            resourceName={{ singular: "Producto", plural: "Productos" }}
                            items={products}
                            renderItem={renderItem}
                        />
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default Products