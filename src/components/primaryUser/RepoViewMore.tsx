import ReactDOM from "react-dom";
import { IGitHubRepository } from "../../types/repoType";

type Props = {
  repo: IGitHubRepository;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const RepoViewMore = ({ repo, setVisible }: Props) => {

  const portalRoot = document.getElementById("root-portal");

  if (!portalRoot) {
    console.error("Error: Target container is not a DOM element.");
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="portal"
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="portal-content">
        <ul>
          <li>
            <strong>Repository Name:</strong> {repo.name}
          </li>
          <li>
            <strong>Full Name:</strong> {repo.full_name}
          </li>
          <li>
            <strong>Language:</strong> {repo.language}
          </li>
          <li>
            <strong>Visibility:</strong> {repo.visibility}
          </li>
          <li>
            <strong>URL:</strong>{" "}
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.html_url}
            </a>
          </li>
          <li>
            <strong>Created At:</strong>{" "}
            {new Date(repo.created_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Last Pushed At:</strong>{" "}
            {new Date(repo.pushed_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Description:</strong>{" "}
            {repo.description || "No description available"}
          </li>
        </ul>
      </div>
    </div>,
    portalRoot
  );
};

export default RepoViewMore;
