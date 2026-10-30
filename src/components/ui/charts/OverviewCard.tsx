interface OverviewCardProps {
  title: string;
  amount: number;
  percentage: number;
  positive: boolean;
}

function OverviewCard({
  title,
  amount,
  percentage,
  positive
}: OverviewCardProps) {
  return (
   <div>
  <h4>{title}</h4>
  <div className="cardDetails">
    <span>${amount}</span>
    <span style={{ color: positive ? "green" : "red" }}>
  {positive ? "⬆" : "⬇"} {percentage}%
</span>
  </div>
</div>
  );
}
export default OverviewCard;