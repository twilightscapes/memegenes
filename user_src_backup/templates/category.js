import React from 'react';
import { graphql, Link, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/siteLayout";
import useSiteMetadata from "../hooks/SiteMetadata";
import { ImPlay } from "react-icons/im";
import { FaImage } from "react-icons/fa";
import { AiOutlinePicLeft } from "react-icons/ai";
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet";
import TimeAgo from 'react-timeago';

const Category = ({ data, pageContext }) => {
  const { category } = pageContext;
  const posts = data.posts.edges;
  const categories = data.allMarkdownRemark.group.map((group) => group.fieldValue);


  const { showDates } = useSiteMetadata();

  return (
    <Layout>
      <Helmet>
        <body id="body" className="category" />
      </Helmet>




      <div className="magicisland">
        <div className="cattags font">
        <select
          className=""
          style={{ background: '#222', outline: '1px solid #111', borderRadius: '3px', padding: '2px', width:'380px', display:'block', margin:'0 1%', overflow:'hidden', height:'34px', lineHeight:'100%' }}
          onChange={(e) => {
            const selectedCategory = e.target.value;
            navigate(`/category/${selectedCategory}`);
          }}
          value={category}
        >
          <option value="">Categories:</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* <div style={{ position: 'absolute', right: '10px', top: '8px', height: '100%', color: '#fff', zIndex: '-1', fontSize: '30px' }}><AiFillDownSquare /></div> */}
      </div>
</div>

<div className="contentpanel grid-container" style={{ justifyContent: 'center', alignItems: 'center', marginTop: '' }}>
  
          <div className="sliderSpacer" style={{ height: "", paddingTop: "", display: "" }}></div>

          {posts.map(({ node }) => {
            const featuredImg = node.frontmatter.featuredImage;

            return (
              <div className="post-card1" style={{ justifyContent: "center", alignItems: "center" }} key={node.id}>
                <Link className="postlink" to={node.frontmatter.slug}>
                  {featuredImg ? (
                    <GatsbyImage
                      image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                      alt={node.frontmatter.title + " - Featured image"}
                      className="featured-image1"
                      placeholder="blurred"
                      style={{ position: 'relative', zIndex: '1', maxHeight: '', margin: '0 auto', width:'100%' }}
                    />
                  ) : (
                    <StaticImage
                      className="featured-image1"
                      src="../../static/assets/default-og-image.webp"
                      alt="Default Image"
                      style={{ position: 'relative', zIndex: '' }}
                    />
                  )}

                  <div className="post-content" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', height:'', position:'relative', background:'', padding:'0', margin:'0 auto 0 auto', textAlign:'center', overFlow:'hidden'}}>
                    <div className="panel" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', maxWidth:'80vw', gap:'.4vw', height:'', textAlign:'center', padding:'1vh 2vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'', color:'#aaa' }}>
                      <h2 className="title" style={{ }}>
                        {node.frontmatter.title}
                      </h2>
                    </div>

                    {node.frontmatter.youtube.youtuber ? (
                      <div className="spotlight" style={{border:'0px solid green', }}>
                        <div className="posticons" style={{flexDirection:'column', justifyContent:'center', margin:'0 auto'}}>
                          <div style={{display:'flex', justifyContent:'space-around', gap:'2vw', color:'fff', }}>
                            <FaImage className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
                            <ImPlay className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
                            <AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
                          </div>
                          Play Multimedia
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>

                {showDates ? (
                  <p style={{position:'', textAlign:'center', border:'0px solid red', fontSize:'70%', minWidth:'100px'}}>
                    <TimeAgo date={node.frontmatter.date}/>
                  </p>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>

    </Layout>
  );
};

export const query = graphql`
  query pageUserstoddlambertSitesbasesrctemplatescategoryJs4001253895($category: String!) {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
    posts: allMarkdownRemark(
      filter: {frontmatter: {category: {eq: $category}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            category
            youtube {
              youtuber
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default Category;