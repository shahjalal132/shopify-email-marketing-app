import {
  InlineGrid,
  Layout,
  LegacyCard,
  Page,
  Tabs,
  Text,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import { tabs } from "../utils/Tabs";

type Props = {};

const CampaignsPage = (props: Props) => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    [],
  );

  return (
    <Page>
      <Layout>
        {/* Begin: Title */}
        <Layout.Section>
          <InlineGrid columns={2}>
            <Text as="h2" variant="heading3xl">
              Campaigns
            </Text>
          </InlineGrid>
        </Layout.Section>
        {/* End: Title */}
        <Layout.Section>
          <LegacyCard>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              <LegacyCard.Section title={tabs[selected].content}>
                {tabs[selected].content}
              </LegacyCard.Section>
            </Tabs>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default CampaignsPage;
