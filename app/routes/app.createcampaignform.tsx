import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import {
  Button,
  Frame,
  Layout,
  Modal,
  Page,
  TextField,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import { Resend } from "resend";

const resend = new Resend("resend_api_key");

type CreateCampaignFormProps = {
  activate: boolean;
  setActivate: React.Dispatch<React.SetStateAction<boolean>>;
};

export const action: ActionFunction = async ({ request }) => {
  console.log("hit");

  const { data, error } = await resend.emails.send({
    from: "ffshahjalal@gmail.com",
    to: "rjshahjalal132@gmail.com",
    subject: "test",
    html: "test",
  });
};

const CreateCampaignForm: React.FC<CreateCampaignFormProps> = ({
  activate,
  setActivate,
}) => {
  const handleChange = useCallback(
    () => setActivate(!activate),
    [activate, setActivate],
  );
  const activator = <Button onClick={handleChange}>Create new</Button>;

  const [campaignName, setCampaignName] = useState("");
  const handleChangeCampaignName = useCallback(
    (newValue: string) => setCampaignName(newValue),
    [],
  );

  const [to, setTo] = useState("");
  const handleChangeTo = useCallback((newValue: string) => setTo(newValue), []);

  const [corporation, setCorporation] = useState("");
  const handleChangeCorporation = useCallback(
    (newValue: string) => setCorporation(newValue),
    [],
  );

  const [from, setFrom] = useState("");
  const handleChangeFrom = useCallback(
    (newValue: string) => setFrom(newValue),
    [],
  );

  const [emailSubject, setEmailSubject] = useState("");
  const handleChangeEmailSubject = useCallback(
    (newValue: string) => setEmailSubject(newValue),
    [],
  );

  const [content, setContent] = useState("");
  const handleChangeContent = useCallback(
    (newValue: string) => setContent(newValue),
    [],
  );

  const submit = useSubmit();
  const actionData = useActionData<typeof submit>();
  console.log(actionData);
  const sendEmail = () => submit({}, { replace: true, method: "POST" });

  return (
    <Page>
      <Frame>
        <Modal
          activator={activator}
          open={activate}
          onClose={handleChange}
          title="Create a new Email Campaign"
          primaryAction={{
            content: "Send",
            onAction: sendEmail,
          }}
          secondaryActions={[
            {
              content: "Finish Later",
              onAction: handleChange,
            },
          ]}
        >
          <Modal.Section>
            <Form>
              <Layout>
                <Layout.Section>
                  <TextField
                    label="Campaign Name"
                    value={campaignName}
                    onChange={handleChangeCampaignName}
                    autoComplete="off"
                  />
                  <TextField
                    label="To"
                    value={to}
                    onChange={handleChangeTo}
                    autoComplete="off"
                  />
                  <TextField
                    label="Corporation"
                    value={corporation}
                    onChange={handleChangeCorporation}
                    autoComplete="off"
                  />
                  <TextField
                    label="From"
                    value={from}
                    onChange={handleChangeFrom}
                    autoComplete="off"
                  />
                  <TextField
                    label="Email Subject"
                    value={emailSubject}
                    onChange={handleChangeEmailSubject}
                    autoComplete="off"
                  />
                  <TextField
                    label="Content"
                    value={content}
                    onChange={handleChangeContent}
                    autoComplete="off"
                  />
                  <Button>Send</Button>
                </Layout.Section>
              </Layout>
            </Form>
          </Modal.Section>
        </Modal>
      </Frame>
    </Page>
  );
};

export default CreateCampaignForm;
