import { reactive } from 'vue'

export const candidateStore = reactive({
    candidateList: [],
    addCandidate(candidate) {
        this.candidateList.push(candidate);
        return true;
    },
    candidateCount(){
        return this.candidateList.length || 0;
    },
    searchSkill(searchValue) {
        return searchValue && this.candidateList.filter(candidate => candidate.skills.findIndex(skill => skill == searchValue) != -1);
    }
});
