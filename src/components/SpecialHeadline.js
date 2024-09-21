
function SpecialHeadline(props) {
  let {details} = props ;
  
  return (
    <>
      <section className="main-headline">
        <div className="headline-content">
          <h2 className="title">{details.title}</h2>
          <p className="details">{details.desc}</p>
        </div>
      </section>
    </>
  );
}

export default SpecialHeadline;
