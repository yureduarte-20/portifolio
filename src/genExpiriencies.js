
import expiriences from './content.json';
document.addEventListener('alpine:init', () => {
    window.Alpine.data('contentProfile', () => ({
        expiriences: expiriences.expiriencies,
        aboutMe: expiriences.aboutMe,
        projects: expiriences.projects
    }))
})
