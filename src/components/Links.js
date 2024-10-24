function Links() {
  // Because the task did not clarify what links should redirect to, they all redirect to this app
  return (
    <ul className="flex flex-row justify-between">
      <li>
        <a href="/" target="_blank" rel="noreferrer">
          Link 1
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="noreferrer">
          Link 2
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="noreferrer">
          Link 3
        </a>
      </li>
    </ul>
  );
}

export default Links;
