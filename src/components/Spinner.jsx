import CircularProgress from "@mui/material/CircularProgress";

function Spinner({ loading }) {
  return (
    <div
      className={`w-[100%] my-2 flex items-center justify-center ${
        loading ? "" : "hidden"
      } `}
    >
      <CircularProgress />
    </div>
  );
}

export default Spinner;
