import Header from "./components/header/header.component"
import Main from "./components/main/main.component"
import SectionAbout from "./components/section-about/section-about.component"
import SectionFeatures from "./components/section-features/section-features.component"
import SectionTours from "./components/section-tours/section-tours.component"
import SectionStories from "./components/section-stories/section-stories.component"
import SectionBook from "./components/section-book/section-book.component"
import Footer from "./components/footer/footer.component"
import Navigation from "./components/navigation/navigation.component"
const App = () => {
  return <div>
    <Navigation />
    <Header />
    <Main>
      <SectionAbout />
      <SectionFeatures />
      <SectionTours />
      <SectionStories />
      <SectionBook />
      <Footer />
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