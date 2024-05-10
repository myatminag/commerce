import { Button } from '@repo/shared/components/button';

export default function Page(): JSX.Element {
  return (
    <div>
      <p className="text-primary-100 mt-10 text-center text-3xl font-semibold">
        Turbo Admin
      </p>
      <Button variant="default">Click Me</Button>
    </div>
  );
}
