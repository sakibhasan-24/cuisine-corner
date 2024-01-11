import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.eamil],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <>
        <h3 className="text-5xl font-bold text-center">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>email</th>
                <th>price</th>
                <th>Date</th>
                <th>transactionId</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payment?.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>{payment.email}</td>
                  <td>{payment.price}</td>
                  <th>{payment.date}</th>
                  <th>{payment.transactionId}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}
