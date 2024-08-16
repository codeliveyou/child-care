interface ITodayEventItem {
  date: string;
  title: string;
  description: string;
}

function TodayEventItem({ date, title, description }: ITodayEventItem) {
  return (
    <div className="py-2 flex flex-col gap-y-2.5">
      <p className="font-semibold text-primary-background leading-5">{title}</p>
      <p className="text-sm leading-4 font-light">{description}</p>
      <p className="text-sm leading-4 font-light text-disabled-text">{date}</p>
    </div>
  );
}

export default TodayEventItem;
