import axios from "axios";

const base_url3="http://localhost:9992/Description";

class DescribeServiceapi{
    getTopicResponse(){
       return  axios.get(base_url3);
    }
}
export default new DescribeServiceapi;