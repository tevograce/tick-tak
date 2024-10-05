import "../styles/global.css";

export default function App({ Component, getProps }) {
  return <Component {...getProps} />;
}
