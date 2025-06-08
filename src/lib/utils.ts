// import { auth } from "@clerk/nextjs/server";

// const { sessionClaims } = auth();
// export const role = (sessionClaims?.metadata as { role?: string })?.role;

// IT APPEARS THAT BIG CALENDAR SHOWS THE LAST WEEK WHEN THE CURRENT DAY IS A WEEKEND.
// FOR THIS REASON WE'LL GET THE LAST WEEK AS THE REFERENCE WEEK.
// IN THE TUTORIAL WE'RE TAKING THE NEXT WEEK AS THE REFERENCE WEEK.

const currentWorkweek = () =>{
    const today = new Date();
    const dayofWeek = today.getDay();
    const startOfWeek = new Date(today);
    
    if(dayofWeek === 0){
        startOfWeek.setDate(today.getDate() + 1);
    }
    if (dayofWeek === 6){
        startOfWeek.setDate(today.getDate() + 2);
    }else{
        startOfWeek.setDate(today.getDate() - (dayofWeek - 1));
    }
    startOfWeek.setHours(0,0,0,0);

    return startOfWeek
}

export const adjustScheduleToCurrentWeek = (
  lessons: { title: string; start: Date; end: Date }[]
): { title: string; start: Date; end: Date }[] => {
//   const latestMonday = getLatestMonday();
  const startOfWeek = currentWorkweek();

  return lessons.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();

    const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;

    const adjustedStartDate = new Date(startOfWeek);

    adjustedStartDate.setDate(startOfWeek.getDate() + daysFromMonday);
    adjustedStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds()
    );
    const adjustedEndDate = new Date(adjustedStartDate);
    adjustedEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds()
    );

    return {
      title: lesson.title,
      start: adjustedStartDate,
      end: adjustedEndDate,
    };
  });
};