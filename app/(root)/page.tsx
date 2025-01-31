import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

export const metadata = {
  title: {
    template: "%s | LowEnd Devices",
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

const Homepage = () => {
  return (
    <>
      <h1>LowEnd Devices Store</h1>
    </>
  );
};

export default Homepage;
