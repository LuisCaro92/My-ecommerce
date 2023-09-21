import { HeartIcon } from "@heroicons/react/24/solid";

function Card() {
  return (
  
    <div className="col-span-2 bg-withe text-gray w-100 shadow-lg rounded-md overflow-hidden mt-10">
      <img
        className="w-full h-full object-cover"
        src="https://www.sportika.cl/wp-content/uploads/2023/04/B-500x500.jpg"
      />
      <div className="p-5 flex flex-col gap-2 bg-slate-50">
        <div className="flex items-center gap-2 ">
          <span className="px-3  py-1 rounded-full text-xs bg-gray-200">
            Stock
          </span>
          <span className="px-3  py-1 rounded-full text-xs bg-gray-200">
            Stock
          </span>
        </div>

        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          Suplemento
        </h2>
        <div>
          <span className="text-xl font-bold"> $50.000</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">$65.0000</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex ">
          <img
            className="w-5 h-5"
            src="data:image/png;base64,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"
          />
          <img
            className="w-5 h-5"
            src="data:image/png;base64,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"
          />
          <img
            className="w-5 h-5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAjVBMVEX/////ygD/yAD8///8yQD///38xwD8ywD+xQD8//3+/vn5/////fz//f/+/fb72FL81mP77rz7++z956L/89H9997+00v/2nT967T+zBr900T723D88cv63Xf5+e/8ziz97sP+3oT74pL62Vz/9+b801b71C78663+8tb59tD90Dn+4Zf54YD59db744p81lf+AAAGAElEQVRoge2b2WLqOAyGbcs7Ic1CAmELUDi0mQPv/3jjQFuWJAVn42Lmv+hFC/lsRZYl2UXof1mIvQir4TVkBiP3JWA0mH0g9QrwMpkM9CvAc+K9xL9gwZMlvAC8TKlY9Y9VaEUEX/c/Yw0LgnHaOxcNgwRjzA+9g8HnBiw2yOnZscEzlhY4HfSLRSigIp+xDJjTI3XI0CS3NMYk7DWGGNYbPsvrdUEx5EosTmDh9klmEJKvGUu/R67x6fiLi/miV1tv+TdYpH1mAxDKnxnTeY9gFtOfGZN1b1TtRPIHjHHm9pSGmEV8JFdg/NGTezHlTgW5cMmmpzSXqdEV1ijuK+MbLG7BOOoJvMzoDZeGPYFXt1xB33sCL7i4JSfbHqjMPSVbN5IT1X0po5Av78HkvZdswCP3YJwEPYADXuBi7ncfvGBSnDDm4x7AuyIXE9G9c53T2jsJ2f2mHNKSd4zFsWMsgz+8ZMaYikGnxmawlWVcE0Mi6LKi0CgkpIRMKQk73ZQVmpbO1yiGTm0dFcLlz6QDy0fpYD9ZzUdGH4coirbRNgiC5dJduq6rf8QYU06e1pa59En8XFF829t84cb07PvH6fdM5S2Fz1RKQjjnklBKhTC7LU1oYpQaZVk2ncZxvNt549kiq+JiPovycQeB6zIEud3hW+g2rEH+V5WPQC04zYtszk+FmKHTL5cxMeniP9iMrHQtnSQIlbnMlzk3wzfDnk53njceL9br43Gz+eefMJxMJr7vr1aT7VeaNhfVT2wsciMzNJ59flkdwTKWojv0tSihobHz8PvNq78lm04HEiT7BHTd6gY/4bjzSQu5uC8uGYreOp80SXxTet2DkXvklcu0uYQQxCuPMgz2ZZttS1yz1EOlynYS0C6Kks7MTdIIkFNRZqkhlOSQLYhSufk1LTMDCgVu37tJeniwXzMHzdOyLbeR+Mw1m8Kv4FzLsdnYW8TSZALPlNCOgvKMrqaIF4H7VHpiYvc8ofTxIx8q32HJhp32g6c0VMu4FWMLmVn18BXTsK7Mciwk35ntYZyLVqLZi6aC8pUdNJej0HbXLIJKLwD7Ys6kRKA3DTzMbPjOKaurpRWt5d3GUjw+NGgTOCiKSR0y4UcNDY5JzJD12hpMBc98dJvg1BDshd2SNs48a+GgQmuI/tgtaeEPdCvtTaUqS7USO9OK/MZeDCKL5UwzzYbtVKwMNhYvWZBDWxcHmGthaSz4BrXVG5hbxWwaP7f5PqGjDVgQ8dEKlSE3s8vBSNhSm29U0eip1K4VsIK1bS7STt986KaWXMwnbYBhbr1J8Fkr4L+2XFM2BM9mlb+IFU4gHoqSVeMYwkz0sDW1wGTdtL9ovr6ok+9NVWMw8FrdoKbBC9CqKgfI+3GVL6HxoR8bjCufzcNDWhVayK4hGLlVdibpCGDpEVpaxVPeNAvxy+dE+MLNiwQdlvfGhGwYvGBWCiaJPzhdpwKYi7KtS3CvAdVEHzcp+g+lMk/nzrFJoWDHRbHEErLJSmbIlwWwoYTXz9SwKTO2/KyfzZs5jYu5vMyim4rXWHxUQibHJmVE4aSYChIWw7Dx7mK7O61/NsJgch896DSCQpGghupy2eny0frZAAPv7llknfd8C1mzY1bWKL2rKmX94AU3luamBFz98unAozfOzRtcbbs5KRbib4B+eZZCIb/+PBHLelTjQt4ln6YmZsCDbhWMsqsEnPKaV9sY2l5FD74LHlqODYy5L9Ym46f6iAVpNLlse3wP+nEfhbGrC2aYZ/VuLCh0PpMXJkTunt1rTEWb/EyazGu5F2zPgxdShPrZboZCWs2+J01q3oHek7NXxYevk8jnyJAfMZ/J01plI5y6qIIflfW4Dxk9xfh6ZWOQr0qSzpG2TZFZHrtPwWtjTXVMOJCCk1lQ7/q03hNBKH2z/q5yIM1jhqrZNlJwSIigSWRbyjg6kjzbGh+tuamC0m+c871tKaMHa9mwrncGIaU72wSIuWnUsPxRDEYJsQ1eLAgGDe+G5f3u4H3/iv8cQbl3v+h/sXQPd/lK9XSo/S/oX+4ATyJisNQsAAAAAElFTkSuQmCC"
          />
          <span className="text-xs ml-2 mt-1  text-gray-500">20K reviews</span>
        </span>
        <div className="mt-10 flex gap-2 justify-between ">
          <button className="bg-green-600 hover:bg-green-500 text-white font-medium tracking-wider transition px-6 py-2 rounded-md">
            Add to cart
          </button>
          <button className= "font-medium tracking-wider transition px-6 py-2 rounded-md">
            <HeartIcon className="w-10 h-10 text-red-400 hover:text-red-500"/>
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default Card;
