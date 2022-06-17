import axios from "axios";

const base_url2="http://localhost:9992/Alltopics";

class ListtopicServiceapi{
    getTopic(){
       return  axios.get(base_url2);
    }
}
export default new ListtopicServiceapi();