import { GoogleOAuthProvider } from "@react-oauth/google";

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {" "}
      {children}
    </GoogleOAuthProvider>
  );
}
export default Providers;
