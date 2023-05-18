import { appFireStore } from "../firebase/config"
import { useEffect, useState } from "react"
import { onSnapshot } from "firebase/firestore";

export const useCollection = (transaction) => {

    // 문서들의 데이터를 관리합니다.
    const [documents, setDocuments] = useState(null);
    // 에러 상태를 관리합니다.
    const [error, setError] = useState(null);

    // collection에 변화가 생길때마다 실행합니다. 때문에 항상 최신의 컬랙션 상태를 반환 받을 수 있습니다.
    useEffect(() => {

        // onSnapshot 함수는 가장 최신의 컬랙션의 내용을 반환하는 함수입니다. 함수는 데이터 수신을 중단하기 위한 unsubscribe 함수를 반환합니다. 더 이상 데이터를 수신 대기할 필요가 없을때 사용합니다.
        // onSnapshot 최신의 데이터셋을 불러오는것
        const unsubscribe = onSnapshot(collection(appFireStore, transaction),
            // 위 내용은 데이터베이스를 구독한다는 함수를 반환하면서
            // 동시에 끊을수 있게함

            // collection은 데이터(데이터베이스)를 저장하는 단위
            // 응답받은 컬랙션이 snapshot에 저장됩니다.
            (snapshot) => {
                let result = [];

                // docs 는 문서를 배열로 저장하고 있습니다.
                snapshot.docs.forEach((doc) => {

                    // 전개구문을 이용해 문서의 데이터를 가져오는 data()함수의 반환값을 객체에 나열합니다. 그리고 나중에 사용할 수 있도록 문서 id 값을 추가합니다.
                    result.push({ ...doc.data(), id: doc.id });
                })

                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            });

        // useEffect 훅의 return 값에 함수를 반환하면 clean-up 함수가 됩니다. 외부에서 데이터를 구독하는 경우 clean-up 함수는 useEffect훅을 사용하는 컴포넌트가 마운트 해제될때 실행되어 구독을 종료하게 됩니다.
        // 참고 : https://ko.reactjs.org/docs/hooks-effect.html#example-using-hooks-1

        // 아래는 클린업함수 (앞에서 동작된 함수를 중단할 때가 있을 때 사용)
        return unsubscribe;
        // 여기에서는 데이터베이스와의 구독을 끊어버림
    }, [collection])

    return { documents, error }
}