import { Link } from "react-router-dom";
import StatusPill from "src/components/_common/StatusPill";
import { clients } from "src/data/site";

export default function Users() {
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Clients</h1>
      <div className="overflow-x-auto rounded-3xl bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-ink/50">
            <tr>
              {["ID", "Name", "Country", "KYC", "Balance", ""].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-t border-black/5">
                <td className="px-4 py-3">{client.id}</td>
                <td className="px-4 py-3">
                  <p>{client.name}</p>
                  <p className="text-ink/40">{client.email}</p>
                </td>
                <td className="px-4 py-3">{client.country}</td>
                <td className="px-4 py-3"><StatusPill value={client.kyc} /></td>
                <td className="px-4 py-3">{client.balance}</td>
                <td className="px-4 py-3">
                  <Link to="/admin/users/CL-2041" className="text-mint-2">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
