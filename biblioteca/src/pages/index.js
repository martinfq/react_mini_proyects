import { Link } from "react-router-dom";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";

export default function Index() {
  const store = useAppContext();
  return (
    <Layout>
      {store.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </Layout>
  );
}
