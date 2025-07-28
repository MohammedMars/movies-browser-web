import './style.css';
export default function MovieDetailsLoading() {
  return (
    <div className="d-flex justify-content-center align-items-center loadingContainer" >
      <div className="spinner-border text-primary spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}