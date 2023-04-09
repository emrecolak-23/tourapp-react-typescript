import Header from "./components/header/header.component"
import Main from "./components/main/main.component"
import SectionAbout from "./components/section-about/section-about.component"
import SectionFeatures from "./components/section-features/section-features.component"
import SectionTours from "./components/section-tours/section-tours.component"

const App = () => {
  return <div>
    <Header />
    <Main>
      <SectionAbout />
      <SectionFeatures />
      <SectionTours />
    </Main>
    {/* <section className="grid-test">
      <div className="row">
        <div className="col-1-of-2">Col 1 of 2</div>
        <div className="col-1-of-2">Col 1 of 2</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-1-of-3">Col 1 of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-2-of-3">Col 2 of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-2-of-4">Col 2 of 4</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-3-of-4">Col 3 of 4</div>
      </div>
    </section> */}
  </div>
}

export default App