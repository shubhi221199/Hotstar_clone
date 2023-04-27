import React from "react";
import "./Genres.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Genres = () => {
  const navigate = useNavigate()
  const Gendata = [
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9188/1429188-a-8862be91a142",
      genre: "Romance",
      id: 10749,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9173/1429173-a-65fa8a53d84d",
      genre: "Drama",
      id: 18,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9174/1429174-a-a7da51fdd7e3",
      genre: "Family",
      id: 10751,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9187/1429187-a-322565c2406c",
      genre: "Reality",
      id: 18,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9168/1429168-a-5a226ed7216e",
      genre: "Comedy",
      id: 35,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9186/1429186-a-d9f2e19b4816",
      genre: "Mythology",
      id: 36,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9170/1429170-a-1b2cd8c45094",
      genre: "Crime",
      id: 80,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9176/1429176-a-17f1864c16e9",
      genre: "Food",
      id: 99,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9161/1429161-a-2dd1e0bda464",
      genre: "Action",
      id: 28,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9198/1429198-a-bd05856eb265",
      genre: "Talk Show",
      id: 10767,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9180/1429180-a-170a097aa445",
      genre: "Lifestyle",
      id: 12,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9199/1429199-a-ba4075bb88ac",
      genre: "Teen",
      id: 14,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9166/1429166-a-4a666a94ae80",
      genre: "Awards",
      id: 37,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9167/1429167-a-6e466c25ee23",
      genre: "Biopic",
      id: 99,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9189/1429189-a-d8074990d9c5",
      genre: "Science",
      id: 10765,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9201/1429201-a-9b017377f453",
      genre: "Travel",
      id: 99,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9172/1429172-a-7acc3bd2079e",
      genre: "Documentry",
      id: 99,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9178/1429178-a-56b7f72d403b",
      genre: "Horror",
      id: 27,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9200/1429200-a-01f79f88103c",
      genre: "Thriller",
      id: 53,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9192/1429192-a-477d9d92e085",
      genre: "Sports",
      id: 53,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9179/1429179-a-9a82adbabfbb",
      genre: "Kids",
      id: 10762,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9165/1429165-a-c695686add32",
      genre: "Anime",
      id: 16,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9162/1429162-a-9641f94fb1b2",
      genre: "Adventure",
      id: 10759,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9163/1429163-a-83d322fcae37",
      genre: "Animals",
      id: 36,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9164/1429164-a-c9995158df5b",
      genre: "Animation",
      id: 16,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9170/1429170-a-1b2cd8c45094",
      genre: "Consert",
      id: 16,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9171/1429171-a-5ea567a2d6a1",
      genre: "Docudrama",
      id: 16,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9175/1429175-a-3bb958315632",
      genre: "Fantasy",
      id: 14,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9177/1429177-a-f6d33acf1392",
      genre: "Historical",
      id: 36,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9181/1429181-a-f59331272fb1",
      genre: "Musical",
      id: 10402,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9182/1429182-a-28d58d3f1bcf",
      genre: "Mystery",
      id: 9648,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9182/1429182-a-28d58d3f1bcf",
      genre: "Sci-fi",
      id: 878,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9191/1429191-a-d2d763e37565",
      genre: "Shorts",
      id: 878,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9193/1429193-a-0499666e76a4",
      genre: "Standup",
      id: 878,
    },
    {
      img: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9196/1429196-a-fd1355b3832d",
      genre: "Superhero",
      id: 878,
    },
  ];

  const handleGenre = (id,genre)=>{
     localStorage.setItem("Genre",(genre))
     navigate(`/ShowByGenre/${id}`)
  }

  return (
    <>
      <h3 className="h2Gen">Genres
      </h3>
      <div className="GenDivmain">
        {Gendata.map((item) => {
          return (
            // <Link to={`/ShowByGenre/${item.id}`}>
            //   {
            //     localStorage.setItem("genrename",(item.genre))
            //   }
            //   <div className="gencard">
            //     <img
            //       src={item.img}
            //       alt=""
            //     />{" "}
            //   </div>
            // </Link>

           

            <div onClick={(()=>{handleGenre(item.id,item.genre) })} className="gencard">
              <img
                  src={item.img}
                  alt=""
                />{" "}
              </div>

          );
        })}
      </div>
    </>
  );
};

export default Genres;
