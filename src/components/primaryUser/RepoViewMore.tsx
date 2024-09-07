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
    <div className="portal">
      <div className="portal-content flex justify-center item-center">
        <div className="repo-details">
          <div className="flex justify-center item-center w-full mb-25">
            <h1 className="">Repository Details</h1>
          </div>
          <div className="repo-detail-item">
            <strong>Repository Name</strong>
            <span style={{ marginLeft: "10px" }}>: {repo.name}</span>
          </div>
          <div className="repo-detail-item">
            <strong>Full Name</strong>
            <span>: {repo.full_name}</span>
          </div>
          <div className="repo-detail-item">
            <strong>Language</strong>
            <span>: {repo.language || "Not specified"}</span>
          </div>
          <div className="repo-detail-item">
            <strong>Visibility</strong>
            <span>: {repo.visibility}</span>
          </div>
          <div className="repo-detail-item">
            <strong>URL</strong>
            <span>
              {" "}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "140px" }}
              >
                : {repo.html_url}
              </a>
            </span>
          </div>
          <div className="repo-detail-item">
            <strong>Created At</strong>
            <span>: {new Date(repo.created_at).toLocaleDateString()}</span>
          </div>
          <div className="repo-detail-item">
            <strong>Last Pushed At</strong>
            <span>: {new Date(repo.pushed_at).toLocaleDateString()}</span>
          </div>
          <div className="repo-detail-item">
            <strong>Description</strong>
            <span>: {repo.description || "No description available"}</span>
          </div>
          <div className="flex justify-center item-center w-full mt-19">
            <button
              className="w-half "
              onClick={() => {
                setVisible(false);
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default RepoViewMore;
