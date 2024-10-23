import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/fields/ui-field-text";
import { UiSelectField } from "../components/uikit/fields/ui-select-field";
import { InputPersCount } from "../components/uikit/fields/ui-input-count-people";

export default function HomePage() {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <HomePageLayout header={<Header />}>
      {/* <Game /> */}
      <InputPersCount />
      

    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}

{/* <UiSelectField
        label="Label "
        placeholder="Placeholder"
        required
        helperText="helper text"
        options={options}
      /> */}