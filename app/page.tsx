
import FormularioCliente from "./components/FormularioCliente";
import ConsultaCliente from "./components/ConsultaCliente";
import ListaClientes from "./components/ListaClientes";
import { JsonClienteRepository } from "@/lib/repositories/JsonClienteRepository";

export const instant = false;

export default async function Home() {
  const repositorio = new JsonClienteRepository();
  const clientes = await repositorio.listar();

  return (
    <main className="min-h-screen bg-gray-100 px-3 py-5 text-gray-900 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-6 rounded-xl bg-white p-5 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            KG Refrigeração
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Sistema de cadastro e gerenciamento de clientes
          </p>

          <nav
            aria-label="Navegação principal"
            className="mt-6 overflow-x-auto border-t border-gray-200 pt-4"
          >
            <ul className="flex min-w-max gap-2 sm:gap-4">
              <li>
                <a
                  href="#cadastro"
                  className="inline-block select-none rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Cadastro
                </a>
              </li>

              <li>
                <a
                  href="#consulta"
                  className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Consulta
                </a>
              </li>

              <li>
                <a
                  href="#clientes"
                  className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Clientes
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="space-y-6">
          <FormularioCliente />
          <ConsultaCliente />
          <ListaClientes clientes={clientes} />
        </div>
      </div>
    </main>
  );
}
