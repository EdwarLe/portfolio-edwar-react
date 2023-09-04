const ProjectUnit = ({title, img, gitHub, demo, skill1, skill2, skill3, skill4, skill5, skill6}) => {
  return (
    <article>
        <h3>{title}</h3>
        <div>
          <img src={img} alt="" />
          <section>
            <a href={gitHub}>GITHUB</a>
            <a href={demo}>DEMO</a>
          </section>
        </div>
        <section>
            <div>
                {skill1}
            </div>
            <div>
                {skill2}
            </div>
            <div>
                {skill3}
            </div>
            <div>
                {skill4}
            </div>
            <div>
                {skill5}
            </div>
            <div>
                {skill6}
            </div>
        </section>
      </article>
  )
}
export default ProjectUnit