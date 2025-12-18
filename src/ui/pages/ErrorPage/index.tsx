import TopNavBar from "../../components/TopNavBar";

export default function ErrorPage() {
  return(
    <>
      <TopNavBar/>
      <div
        className={"d-flex justify-content-lg-center align-items-center"}
        style={{height:"70vh"}}
      >
        <img src='https://media.istockphoto.com/id/1308685498/zh/%E7%85%A7%E7%89%87/%E7%A8%8B%E5%BC%8F%E4%BB%A3%E7%A2%BC%E4%B8%AD%E7%9A%84%E9%8C%AF%E8%AA%A4%E6%A6%82%E5%BF%B5.webp?s=1024x1024&w=is&k=20&c=SAwA8yQItdqORRdvgGWZG_5pEFst76ypYhe2zymQeMk=' alt="just a cat"/>
      </div>
    </>
  )
}