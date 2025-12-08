import ComboboxDemo from "../composant-projet/ComboBox";

export default function HomePage() {
  
  return (
    <main className="">
      <section className="">
        <h1 className="font-semibold text-center pb-2 text-2xl">Welcome to NutriZeus</h1>
        <p className="px-10">
          Decouvrer nos composant alimentaire a partir de votre plat favorie,
          utilise la recherche avant de commencer
        </p>
        <div className="flex justify-center my-5">
          <ComboboxDemo />
        </div>
      </section>
    </main>
  );
}