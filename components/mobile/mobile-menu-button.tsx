import { Menu, X } from 'lucide-react';

type MobileMenuButtonProps = {
    isToggled: boolean;
    toggle: () => void;
}
const MobileMenuButton = ({ isToggled, toggle }: MobileMenuButtonProps) => {
    return (
        <>

      <button
        onClick={toggle}
        className="lg:hidden fixed top-4 left-4 z-50 h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
      >
        {isToggled ? <X className="h-5 w-5 text-foreground cursor-pointer" /> : <Menu className="h-5 w-5 text-foreground cursor-pointer" />}
      </button>
        </>
    );
};

export default MobileMenuButton;