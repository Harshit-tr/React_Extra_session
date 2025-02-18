import { useState } from "react";
import { UserProvider } from "./func_comp4";
import { Page1, Page2, Page3 } from "./funct_comp5";

function SelectPage({ index }) {
  const Page = [Page1, Page2, Page3][index];
  return <Page />;
}
function Test2() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <UserProvider>
        <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
          Page1
        </button>
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          Page2
        </button>
        <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>
          Page3
        </button>
        <SelectPage index={currentPage} />
      </UserProvider>
    </>
  );
}
export default Test2;