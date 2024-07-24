import styles from "./styles.module.css";
import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  useApi,
  useApplyAttributeChange,
  useInstructions,
  useTranslate,
  InlineLayout,
  Divider,
  Image,
  Icon,
  View,
} from "@shopify/ui-extensions-react/checkout";


export default reactExtension("purchase.checkout.cart-line-list.render-after", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const instructions = useInstructions();
  const applyAttributeChange = useApplyAttributeChange();

  const reviews = [
    { id: 1, author: 'Jane Doe', content: 'Great product!', rating: 5 },
    // { id: 2, author: 'John Smith', content: 'Very satisfied.', rating: 4 },
  ];

  const fNames = [
    "Emilia", "Emma", "Sophia", "Hannah", "Mia", "Ella", "Mila", "Lina", "Lia", "Leni",
    "Clara", "Marie", "Lilly", "Noah", "Matteo", "Elias", "Leon", "Paul", "Theo", "Luca",
    "Finn", "Liam", "Emil", "Henry", "Felix", "Leo"
  ];

  const lNames = [
    "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker",
    "Schulz", "Hoffmann", "Koch", "Schwarz", "Richter", "Herrmann", "Schubert", "Baumann", "Wolf"
  ];

  const messages = [
    "Ausgezeichneter Service und schnelle Lieferung!",
    "Die Produktqualität hat meine Erwartungen übertroffen. Ich kann diesen Laden sehr empfehlen!",
    "Fantastische Erfahrung! Das Kundensupport-Team war sehr hilfsbereit und reaktionsschnell. Ich werde hier definitiv wieder einkaufen.",
    "Große Auswahl an Produkten zu vernünftigen Preisen. Meine Bestellung kam pünktlich und in einwandfreiem Zustand an. Fünf Sterne!",
    "Ich bin sehr zufrieden mit meinem Kauf. Der Artikel entsprach genau der Beschreibung und der Checkout-Prozess war reibungslos und schnell. Ich werde hier definitiv wieder einkaufen.",
    "Dieser Laden ist zu meinem Anlaufpunkt für alle meine Bedürfnisse geworden. Die Produkte sind erstklassig und die Lieferung ist immer prompt.",
    "Erstaunliche Qualität und großartiges Preis-Leistungs-Verhältnis. Die Verpackung war sicher und die Artikel kamen in einwandfreiem Zustand an.",
    "Sehr beeindruckt von der Geschwindigkeit der Lieferung und der Qualität der Produkte. Ich werde es definitiv Freunden und Familie empfehlen.",
    "Das beste Online-Einkaufserlebnis, das ich je hatte. Die Produkte sind von hoher Qualität und der Kundenservice ist außergewöhnlich.",
    "Ich liebe diesen Laden! Die Vielfalt der Produkte ist fantastisch und die Preise sind unschlagbar. Der Versand war schnell und problemlos.",
    "Ich bin sehr zufrieden mit meinem Kauf. Der Artikel entsprach genau der Beschreibung und der Checkout-Prozess war reibungslos und schnell. Ich werde hier definitiv wieder einkaufen.",
  ];

  const months = [
    'Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ]
  const years = ['2021', '2022', '2023']

  const stars = [4, 5];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const fullStars = stars[getRandomInt(stars.length)];
  const emptyStars = 5 - fullStars;

  const reviewElements = reviews.map((review) => (
    <>
      <View background="surfaceSecondary" padding="base" border="base" borderRadius="large" blockPadding="loose">
        <InlineLayout blockAlignment="center" spacing='none' columns={['auto', 'auto', 'fill', 'auto']}>
          <Text size="extraLarge" appearance="decorative">{'★'.repeat(fullStars)}</Text>
          <Text size="extraLarge" appearance="subdued">{'☆'.repeat(emptyStars)}</Text>
          <Text></Text>
          <InlineLayout blockAlignment="center" spacing='none' columns={['auto', 'auto']}>
            <Icon
              source="success"
              appearance="accent"
            />
            <Text appearance="accent">&nbsp;Verifizierte Bewertung</Text>
          </InlineLayout>
        </InlineLayout>
        <BlockStack>
          <Text size="large">{messages[getRandomInt(messages.length)]}</Text>
          <InlineLayout blockAlignment="center" spacing='base' columns={['fill', 'auto']}>
            <Text emphasis="italic">
              {fNames[getRandomInt(fNames.length)]}   {lNames[getRandomInt(lNames.length)]}
            </Text>
            <Text emphasis="italic" size="small">{getRandomInt(28)}.{months[getRandomInt(12)]} {years[getRandomInt(3)]}</Text>
          </InlineLayout>
        </BlockStack>
      </View>

    </>
  ));

  return (
    <>
      <View >
        {/* <BlockStack border={"dotted"} padding={"tight"}> */}
        {/* <Banner title="Look at what our customers are saying" /> */}
        {reviewElements}
        {/* </BlockStack> */}
      </View>
    </>
  );
}
