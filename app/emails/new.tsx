import { Button } from "@react-email/components";
import { Html } from "@react-email/html";

export function EmailNew(props: { url: any }) {
  const { url } = props;

  return (
    <Html>
      <Button href={url}>Click here</Button>
    </Html>
  );
}
