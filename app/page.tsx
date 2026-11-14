
import FormularioCliente from "./components/FormularioCliente";

export default function Home() {
  return (
   <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10 text-gray-900">
      <section className="w-full max-w-xl rounded-xl bg-white p-8 shadow-md">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            KG Refrigeração
          </h1>

          <p className="mt-2 text-gray-600">
            Cadastro de clientes
          </p>
        </header>

        <FormularioCliente />
      </section>
    </main>
  );
}
