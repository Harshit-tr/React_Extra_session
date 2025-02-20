import * as React from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();

class MyFeature extends React.Component {
  state = {
    articles: [
      { id: id.next(), title: "Title1", summary: "Summary1", display: "none" },
      { id: id.next(), title: "Title2", summary: "Summary2", display: "none" },
      { id: id.next(), title: "Title3", summary: "summary3", display: "none" },
    ],
    title: "",
    summary: "",
  };
  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };

  onClickToggle = (id) => {
    this.setState((state) => {
      const articles = [...state.articles];
      const index = articles.findIndex((x) => x.id === id);
      articles[index] = {
        ...articles[index],
        display: articles[index].display ? "" : "none",
      };
      return { ...state, articles };
    });
  };

  onClickRemove = (id) => {
    console.log(id);
    console.log(this.state.articles);
    this.setState((state) => ({
      ...state,
      articles: state.articles.filter((i) => i.id != id),
    }));
  };
  onClickAdd = () => {
    this.setState((state) => ({
      articles: [
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none",
        },
        ...state.articles,
      ],
      title: "",
      summary: "",
    }));
  };

  render() {
    const { articles, title, summary } = this.state;
    return (
      <>
        <section>
          <header>
            {" "}
            <h1>Articles</h1>
            <input
              placeholder="Title"
              value={title}
              onChange={this.onChangeTitle}
            />
            <input
              placeholder="Summary"
              value={summary}
              onChange={this.onChangeSummary}
            />
            <button onClick={this.onClickAdd}>ADD</button>
          </header>
          <article>
            <ul>
              {articles.map((i) => (
                <li key={i.id}>
                  <a
                    href={`#${i.id}`}
                    title="Toggle Summary"
                    onClick={this.onClickToggle.bind(null, i.id)}
                  >
                    {i.title}
                  </a>
                  <a
                    href={`#${i.id}`}
                    title="Delete Article"
                    onClick={this.onClickRemove.bind(null, i.id)}
                  >
                    Remove
                  </a>
                  <p style={{ display: i.display }}>{i.summary}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </>
    );
  }
}
export default MyFeature;
