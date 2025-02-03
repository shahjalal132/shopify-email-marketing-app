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
import CreateCampaignForm from "./app.createcampaignform";

type Props = {};

const CampaignsPage = (props: Props) => {
  const [selected, setSelected] = useState(0);

  const [activate, setActivate] = useState(false);

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
        {/* Begin: Tabs */}
        <Layout.Section>
          <br />
          <LegacyCard>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              <LegacyCard.Section title={tabs[selected].content}>
                {tabs[selected].component}
              </LegacyCard.Section>
            </Tabs>
          </LegacyCard>
        </Layout.Section>
        {/* End: Tabs */}
        {/* Begin: Create Campaign */}
        <Layout.Section variant="oneThird">
          <CreateCampaignForm activate={activate} setActivate={setActivate} />
        </Layout.Section>
        {/* End: Create Campaign */}
      </Layout>
    </Page>
  );
};

export default CampaignsPage;
