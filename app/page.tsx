
import FormularioCliente from "./components/FormularioCliente";
import ListaClientes from "./components/ListaClientes";
import { JsonClienteRepository } from "@/lib/repositories/JsonClienteRepository";

// export const dynamic = "force-dynamic";
export const instant = false;
export default async function Home() {
  const repositorio = new JsonClienteRepository();
  const clientes = await repositorio.listar();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10 text-gray-900">
      <section className="w-full max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            KG Refrigeração
          </h1>

          <p className="mt-2 text-gray-600">
            Cadastro e gerenciamento de clientes
          </p>
        </header>

        <FormularioCliente />

        <ListaClientes clientes={clientes} />
      </section>
    </main>
  );
}
