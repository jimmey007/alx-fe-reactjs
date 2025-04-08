function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-md mt-4 w-full max-w-md">
      {message}
    </div>
  );
}

export default ErrorMessage;