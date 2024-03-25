function skillsMember() {
    // Create a new member
    this.member = new Member();
    // Create a new skill
    this.skill = new Skill();
    // Add a skill to the member
    this.member.addSkill(this.skill);
    // Get the member's skills
    this.member.getSkills();
}
