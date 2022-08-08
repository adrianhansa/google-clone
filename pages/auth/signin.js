import Layout from "components/layout/Layout";
import { getProviders, signIn } from "next-auth/react";

const SignIn = ({ providers }) => {
  return (
    <Layout>
      <div>
        <h1 className="text-center text-2xl">Sign In</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
