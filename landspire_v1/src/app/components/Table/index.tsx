'use-client';

import style from "./style.module.css";

const Table = () => {
  return (
    <>
      {/* Search feature */}
      <form action="" className="flex justify-center w-full max-w-[95%] gap-2 mb-10">
        <input type="text" className="border-landspire_dark_gray border-2 py-3 px-5 w-[720px] rounded-xl box-border" placeholder="Find wallet address..." />
        <input type="submit" value="Search"  className="bg-landspire_blue text-landspire_white border-2 py-3 px-5 rounded-xl box-border" />
      </form>

      <p className="mb-10 text-center">Hasil pencarian untuk</p>

      {/* Table */}
      <div className="w-full flex justify-center">
        <div className={`w-[95%] ${style.table_container} bg-landspire_white box-border px-5 pt-5 pb-7 rounded-lg`}>
          <table className={`${style.custom_table}`}>
            <thead>
              <tr>
                <th>No</th>
                <th>Owner</th>
                <th>Certificate Number</th>
                <th>Ownership Rights</th>
                <th>Land Area</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Faizal Maulana</td>
                <td>9823405982340</td>
                <td>Hak Guna Pakai</td>
                <td>12m2</td>
                <td>Kota Depok</td>
              </tr>

              <tr>
                <td>1.</td>
                <td>Faizal Maulana</td>
                <td>9823405982340</td>
                <td>Hak Guna Pakai</td>
                <td>12m2</td>
                <td>Kota Depok</td>
              </tr>

              <tr>
                <td>1.</td>
                <td>Faizal Maulana</td>
                <td>9823405982340</td>
                <td>Hak Guna Pakai</td>
                <td>12m2</td>
                <td>Kota Depok</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
