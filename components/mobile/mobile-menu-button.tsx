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
        className="lg:hidden fixed top-4 left-4 z-50 h-10 w-10 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border flex items-center justify-center hover:bg-accent dark:hover:bg-dark-accent transition-colors"
      >
        {isToggled ? <X className="h-5 w-5 text-foreground dark:text-dark-foreground cursor-pointer" /> : <Menu className="h-5 w-5 text-foreground dark:text-dark-foreground cursor-pointer" />}
      </button>
        </>
    );
};

export default MobileMenuButton;