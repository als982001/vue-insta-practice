import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      testString: "test string",
      moreDataIndex: 0,
      data: [
        {
          name: "Kim Hyun",
          userImage: "https://picsum.photos/100?random=3",
          postImage: "https://picsum.photos/600?random=3",
          likes: 36,
          date: "May 15",
          liked: false,
          content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
          filter: "perpetua",
          isLiked: false,
        },
        {
          name: "John Doe",
          userImage: "https://picsum.photos/100?random=4",
          postImage: "https://picsum.photos/600?random=4",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "clarendon",
          isLiked: false,
        },
        {
          name: "Minny",
          userImage: "https://picsum.photos/100?random=5",
          postImage: "https://picsum.photos/600?random=5",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "우리집 개는 화장실 물도 내림",
          filter: "lofi",
          isLiked: false,
        },
      ],
    };
  },
  mutations: {
    handleLike(state, payload) {
      const { index } = payload;
      const { isLiked } = state.data[index];

      if (isLiked) {
        state.data[index].likes = Math.max(state.data[index].likes - 1, 0);
        state.data[index].isLiked = false;
      } else {
        state.data[index].likes = state.data[index].likes + 1;
        state.data[index].isLiked = true;
      }
    },
    handleAddData(state, payload) {
      const { additionalData } = payload;

      state.data.push(additionalData);
    },
    handleChangeMoreDataIndex(state) {
      state.moreDataIndex = state.moreDataIndex ? 0 : 1;
    },
  },
  actions: {
    // ajax 요청 관련된 것들 저장하는 곳

    getData(context) {
      axios
        .get(
          `${process.env.VUE_APP_MORE_DATA.replace(
            ":index",
            context.state.moreDataIndex
          )}.json`
        )
        .then((res) => {
          const { data } = res;

          context.commit("handleAddData", { additionalData: data });
          context.commit("handleChangeMoreDataIndex");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});

export default store;
