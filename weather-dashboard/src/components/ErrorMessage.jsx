function ErrorMessage({ message }) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 w-full max-w-md">
        {message}
      </div>
    );
  }
  
  export default ErrorMessage;