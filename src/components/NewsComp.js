import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComp extends Component {
  articles = [];
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false,
      page:1,
      totalResults: 0
      // pageSize: 5

    }
  }
  async update(){
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.newsCategory}&apiKey=bbee3e0a2b1048f892a603dceca812f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults});
    // console.log(`${url}`);
  }
  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.newsCategory}&apiKey=bbee3e0a2b1048f892a603dceca812f4&page=0&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData=await data.json();
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    this.update();
  }
  handleNextClick=async()=>{
    
   await this.setState({page: this.state.page+1});
     this.update();
  }
  handlePreviousClick=async()=>{
    
    await this.setState({page: this.state.page-1});
     this.update();
  }
  fetchMoreData =  () =>{
    setTimeout(async() => {
      this.setState({page: this.state.page +1})
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.newsCategory}&apiKey=bbee3e0a2b1048f892a603dceca812f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
    }, 1000);
    
    
  }
  

  render() {

    return (
      <div className='container my-2'>
        <h2>Taaza Khabar - Top {this.props.newsCategory} Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="row my-3">
          {this.state.articles.map((e)=>{
            return <div  className="col-md-4" key={e.url}>
              <NewsItem title={e.title?e.title.slice(0,60):""} description={e.description?e.description.slice(0,121):""} imageUrl={e.urlToImage} url={e.url} author={e.author} date={e.publishedAt}/></div>

          })}
          
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}

      </div>
    )
  }
}

export default NewsComp