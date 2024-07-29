export default function Footer() {
  return (
    <footer className=" mb-4 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium">Suman</span> | All rights reserved.
      </small>
    </footer>
  );
}
