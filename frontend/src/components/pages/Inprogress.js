const InProgress = () => (
  <div className="columns p-5 is-flex-wrap-wrap">
    <div className="column is-12">
      <h1 className="title has-text-grey-dark">This page is in progress</h1>
    </div>
    <div className="column has-text-centered">
      <img className='px-5' src={`${process.env.PUBLIC_URL}/images/In_progress.svg`} alt="In progress" />
    </div>
  </div>
);

export default InProgress;