import { useEffect } from "react";
import { useState } from "react";
import ImageList from "./Components/ImageList";
import useScrollBottom from "./Hook/useScrollBottom";
import Loading from "./Components/Loading";

function App() {
    const [photos, setPhotos] = useState([]);
    // console.log(photos)
    const [fetchPage, setFetchPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    console.log("로딩중인가?" + isLoading);


    const isBottom = useScrollBottom();

    // useEffect의 두번째 인자가 빈배열이면
    // 마운트 되었을때(지금은 setPhotos가 업데이트 되어서 리렌더링 된 경우) 한번만 실행하게 해줌
    useEffect(() => {
        fetchData()
        // fetchPage가 변경될 때마다 실행함
    }, [fetchPage])

    useEffect(() => {
        if (isBottom) {
            // prevPage에는 fetchPage의 이전값이 들어옴
            setFetchPage((prevPage) => {
                return prevPage + 1
            })
        }

        // 상수인 isBottom값이 변경될 때 실행
    }, [isBottom])

    const fetchData = async () => {
        // fetch가 시작됨과 동시에 true로 바뀜.
        setIsLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`)

            if (!response.ok) {
                throw new Error("네트워크 응답이 되지 않았슴");
            }
            const data = await response.json()
            setPhotos((prevImage) => {
                return [...prevImage, ...data];
            });
            setIsLoading(false);
        } catch (error) {
            console.log('데이터 문제발생 : ', error);
        }
    }


    return (
        <ul>
            <ImageList photos={photos} />
            {isLoading && <Loading />}
        </ul>
    );
}
export default App;