const TableCart = ({ headings, data, actions, handleDelete }) => {
  return (
    <table className="w-full">
      <thead className="text-xs text-gray-700 uppercase">
        <tr>
          {headings.map((text, i) => (
            <th key={i} className="px-6 py-3">
              {text}
            </th>
          ))}
          {actions ? <th>. . .</th> : null}
        </tr>
      </thead>
      <tbody className="text-sm text-gray-600">
        {data.map((item) => (
          <tr key={item.id} className="text-center bg-gray-100 border-b-2">
            {headings.map((text, i) => (
              <td key={i} className="px-6 py-4">
                {item[text]}
              </td>
            ))}
            {actions ? (
              <td className="px-6 py-4">
                <button 
                  className="p-1 border rounded hover:text-red-600" 
                  onClick={() => {
                    handleDelete(item.id)
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCart;
